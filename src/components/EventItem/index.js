// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, clickEventImg} = props
  const {name, location, imageUrl, id, registrationStatus} = eachEvent
  const clickBtn = () => {
    clickEventImg(id)
  }
  return (
    <div>
      <li className="eachEventContainer">
        <button onClick={clickBtn} className="btn-style">
          <img src={imageUrl} className="img-style" alt={name} />
        </button>
        <h1 className="heading-style">{name}</h1>
        <p>{location}</p>
      </li>
    </div>
  )
}

export default EventItem
