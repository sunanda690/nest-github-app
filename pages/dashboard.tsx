import { useSession } from 'next-auth/react'
import React from 'react'
import { Container } from 'react-bootstrap'
import handler from './api/github'

const Dashboard = () => {
    const { data, status } = useSession()
    async function createRepo() {
        // const res = fetch('/api/github')
        const res = null
        await handler(data,res)
    }
    return (
        <Container className="d-flex justify-content-center mt-5">
            <button onClick={createRepo}>
                Create Repository
            </button>
        </Container>
    )
}

export default Dashboard