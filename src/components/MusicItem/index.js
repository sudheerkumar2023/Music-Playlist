import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const MusicItem = props => {
  const {musicDetails, deleteMusicItem} = props
  const {id, imageUrl, genre, name, duration} = musicDetails

  const onDelete = () => {
    deleteMusicItem(id)
  }

  return (
    <li className="pop-container">
      <div className="image-icon-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-container">
          <p className="name-heading">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-container">
        <p className="duration">{duration}</p>
        <button
          onClick={onDelete}
          type="button"
          data-testid="delete"
          className="button"
        >
          <RiDeleteBin7Line className="delete-icon" />
        </button>
      </div>
    </li>
  )
}
export default MusicItem
