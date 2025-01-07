async function User({ session }) {
  return (
    <div className="user">
      <img
        src={session.user.image}
        alt={session.user.name}
        referrerPolicy="no-referrer"
      />
      <div>{session?.user?.name}</div>
    </div>
  );
}

export default User;
