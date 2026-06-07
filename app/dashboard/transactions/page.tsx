export default function Transactions() {
  const mock = [
    { type: "Airtime", amount: 1000 },
    { type: "Data", amount: 2000 },
    { type: "Withdrawal", amount: 5000 },
  ];

  return (
    <div>
      <h1>Transactions</h1>

      {mock.map((t, i) => (
        <div key={i}>
          <p>{t.type}</p>
          <p>₦{t.amount}</p>
        </div>
      ))}
    </div>
  );
}
