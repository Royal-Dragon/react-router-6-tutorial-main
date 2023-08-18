const Dashboard = ({user}) => {
  return (
    <section className='section'>
    <h1>Hello!!, {user?.name}</h1>
    </section>
  );
};
export default Dashboard;
