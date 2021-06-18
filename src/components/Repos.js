import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap'

const Repos = ({ repos_url }) => {

    const [repos, setRepos] = useState([])

    const fetchRepo = async () => {
        const response = await axios.get(repos_url)

    }
    return (
        <ListGroup>

        </ListGroup>
    );
}

export default Repos;