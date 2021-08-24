export default function Avatar({ name, picture }) {
  return (
    <div>
      {picture && <img src={picture} alt={name} />}
      <div>{name}</div>
    </div>
  )
}
