import profilePic from './abstract-user-flat-4.svg';
import Button from 'react-bootstrap/Button';

// user object containing user details
const user = {
        name: "Ted",
        surname: "West",
        date_of_birth: "22/11/1989",
        address: "34 Turnpike Drive, Winchester, SO23 7BE",
        country: "UK",
        email: "WesternmostTed@gmail.com",
        telephone: "0787334578",
        company: "Big cots for Tiny Tots",
        profile_picture: profilePic,
        /* shopping_cart: ["Battle of the Belgian Buns", "Bananas and How to Eat Them", "Mighty Apes", "Danish or Swedish: The Party Game"], */
    }

// makes the user pic into an element that can be passed into render
const userPic = (<img src={user.profile_picture} className="user-pic" alt="user profile picture" />)

  // list of user detail titles to pass into render
const userList1 = (<ul className="user-categories">
        <li><b>Name:</b></li>
        <li><b>DOB:</b></li>
        <li><b>Address:</b></li>
        <li><b>Country:</b></li>
        <li><b>Company:</b></li>
        <li><b>Email:</b></li>
        <li><b>Phone:</b></li>                    
    </ul>);

// list of user details to pass into render
const userList2 = (<ul className="user-details">
        <li>{user.name} {user.surname}</li>
        <li>{user.date_of_birth}</li>
        <li>{user.address}</li>
        <li>{user.country}</li>
        <li>{user.company}</li>
        <li>{user.email}</li>
        <li>{user.telephone}</li>                    
    </ul>);

// section to contain the lists side by side
// this makes the content align vertically with flex
const userContainer = (<div className="user-container">
        {userList1}
        {userList2}
    </div>)

// function for onClick
function refreshPage() {
        alert("User has logged out");
    }

// button element from bootstrap with onClick
// researched React events: https://www.w3schools.com/react/react_events.asp
const theButton = (<><Button variant="outline-warning" onClick={refreshPage}>Logout</Button>{' '}</>)


// final component
export default function Profile() {
        return(
            <div className="container profile-container">
                <div className="profile-section top-space">                          
                    {userPic}
                    {userContainer}
                    {theButton}
                </div>
            </div>
            
        )            
    }