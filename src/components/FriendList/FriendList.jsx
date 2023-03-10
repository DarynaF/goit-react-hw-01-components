import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
import { FriendListContainer } from './FriendList.styled';


export default function  FriendList({ friends }) {
    return (
        <FriendListContainer>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </FriendListContainer>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
        })
    )

}