import React from 'react';
import {
    Card,
    CardBody
} from 'reactstrap'

const UserCard = ({ user }) => {


    return (
        <Card className="text-center mt-3 mb-4">
            <img
                src={user.avatar_url}
                height="200px"
                width="200px"
                style={{ margin: "auto" }}
            />
            <CardBody>
                <div className="text-primary">
                    {user.name}
                </div>
                <div className="text-primary">
                    {user.location}
                </div>
                <div className="text-primary">
                    {user.bio}
                </div>
                <div className="text-info">
                    Available For Hire:   {user.hireable ? "YES" : "Not available"}
                </div>
                <div className="text-info">
                    Followers:   {user.followers}
                </div>
            </CardBody >

        </Card >
    );
}

export default UserCard;