export default function RoleCard({ role }) {
  return (
    <div className="h-14 flex justify-center items-center bg-white border border-gray-300 rounded-xl mb-2">
      {role.title && role.title !== "New Role" ? (
        <p>{role.title}</p>
      ) : (
        <p className="text-slate-500">New Role</p>
      )}
    </div>
  );
}
