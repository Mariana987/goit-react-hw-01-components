import PropTypes from 'prop-types'

function FriendsListItem({ isOnline, avatar, name }) {
    return (
        <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendsListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendsListItem;
