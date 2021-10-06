import FriendsListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'
function FriendsList({ elements }) {
    return (
        <section className={s.section}>
            <ul >
                {elements.map(element => (
                    < FriendsListItem
                        key={element.id}
                        isOnline={element.isOnline}
                        avatar={element.avatar}
                        name={element.name}
                    />
                ))}
            </ul></section>
    )
}

FriendsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default FriendsList;