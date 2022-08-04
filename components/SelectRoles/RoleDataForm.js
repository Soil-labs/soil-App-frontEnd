export default function RoleDataForm({ role, saveRoleCallback }) {
  return (
    <div>
      <h3>here goes the form</h3>
      <p>{role.title}</p>
      <button
        onClick={() => {
          saveRoleCallback(role);
        }}
      >
        Save Role
      </button>
    </div>
  );
}
