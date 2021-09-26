import React, { createContext, useCallback, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import lodash from 'lodash';

const CheckoutContext = createContext({});

const CheckoutProvider = ({ children }) => {
  // Global State
  const [cartTickets, setCartTickets] = useLocalStorage('cartTickets', []);
  const [payments, setPayments] = useLocalStorage('payments', [
    {
      id: 0,
      payment_method_id: '',
      value: '',
    },
  ]);

  // Methods
  const addTicketToCart = useCallback(
    (ticket) => {
      setCartTickets([...cartTickets, ticket]);
    },
    [cartTickets, setCartTickets]
  );

  const removeTicketFromCart = useCallback(
    (ticket) => {
      const ticketIndex = cartTickets.findIndex(
        (cartTicket) => cartTicket.id === ticket.id
      );

      if (ticketIndex !== -1) {
        cartTickets.splice(ticketIndex, 1);
      }

      setCartTickets([...cartTickets]);
    },
    [cartTickets, setCartTickets]
  );

  const getQuantityOfTicketInCart = useCallback(
    (ticket_id) => {
      const ticketsInCart = lodash.groupBy(cartTickets, 'id');

      return ticketsInCart[ticket_id] ? ticketsInCart[ticket_id].length : 0;
    },
    [cartTickets]
  );

  const getTotalPriceOfCartInCents = useCallback(
    () => cartTickets.reduce((acc, ticket) => acc + ticket.price_in_cents, 0),
    [cartTickets]
  );

  const addSliptPayment = useCallback(() => {
    const lastPaymentId = lodash.maxBy(payments, 'id').id;
    const nextPaymentId = lastPaymentId + 1;
    setPayments([
      ...payments,
      {
        id: nextPaymentId,
        payment_method_id: '',
        value: '',
      },
    ]);
  }, [payments, setPayments]);

  const updatePaymentMethod = useCallback(
    (payment) => (payment_method_id) => {
      const paymentIndex = payments.findIndex((pay) => pay.id === payment.id);

      Object.assign(payments[paymentIndex], {
        payment_method_id,
      });

      setPayments([...payments]);
    },
    [payments, setPayments]
  );

  const updatePaymentValue = useCallback(
    (payment) => (value = '') => {
      const paymentIndex = payments.findIndex((pay) => pay.id === payment.id);

      Object.assign(payments[paymentIndex], {
        value: Number(value.replace(/[\W\sR]/gi, '')),
      });

      setPayments([...payments]);
    },
    [payments, setPayments]
  );

  const removePaymentMethod = useCallback(
    (payment) => {
      console.log(payment);
      const paymentIndex = payments.findIndex((pay) => pay.id === payment.id);

      payments.splice(paymentIndex, 1);

      setPayments([...payments]);
    },
    [payments, setPayments]
  );

  const cleanUpAfterSale = useCallback(() => {
    localStorage.removeItem('cartTickets');
    localStorage.removeItem('payments');
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        cartTickets,
        addTicketToCart,
        removeTicketFromCart,
        getQuantityOfTicketInCart,
        getTotalPriceOfCartInCents,
        payments,
        addSliptPayment,
        updatePaymentMethod,
        updatePaymentValue,
        cleanUpAfterSale,
        removePaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context)
    throw new Error('useCheckout must be used within an CheckoutProvider');

  return context;
}

export { CheckoutProvider, useCheckout };
