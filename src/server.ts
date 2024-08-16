import fastify from 'fastify'
import { StatusCode } from './enums/http-status-code'

const server = fastify({ logger: true })

const drivers = [
    {
        id: 1,
        name: "Max Verstappen",
        team: "Red Bull Racing",
        country: "Netherlands"
    },
    {
        id: 2,
        name: "Lewis Hamilton",
        team: "Mercedes",
        country: "United Kingdom"
    },
    {
        id: 3,
        name: "Nico Hulkenberg",
        team: "Haas",
        country: "Germany"
    },
    {
        id: 4,
        name: "Lando Norris",
        team: "McLaren",
        country: "United Kingdom"
    },
    {
        id: 5,
        name: "Yuki Tsunoda",
        team: "Visa Cash App Racing Bulls",
        country: "Japan"
    },
    {
        id: 6,
        name: "Charles Leclerc",
        team: "Ferrari",
        country: "Monaco"
    },
    {
        id: 7,
        name: "Guanyu Zhou",
        team: "Kick Sauber",
        country: "China"
    },
    {
        id: 8,
        name: "Fernando Alonso",
        team: "Aston Martin",
        country: "Spain"
    },
    {
        id: 9,
        name: "Pierre Gasly",
        team: "Alpine",
        country: "France"
    },
    {
        id: 10,
        name: "Alexander Albon",
        team: "Williams",
        country: "New Zealand"
    }
]
const teams = [
    {
        id: 1,
        name: "Red Bull Racing"
    },
    {
        id: 2,
        name: "Mercedes"
    },
    {
        id: 3,
        name: "Ferrari"
    },
    {
        id: 4,
        name: "McLaren"
    },
    {
        id: 5,
        name: "Aston Martin"
    },
    {
        id: 6,
        name: "Alpine"
    },
    {
        id: 7,
        name: "Visa Cash App Racing Bulls"
    },
    {
        id: 8,
        name: "Kick Sauber"
    },
    {
        id: 9,
        name: "Haas"
    },
    {
        id: 10,
        name: "Williams"
    }
]

server.get('/teams', async (request, response) => {
    response.type("application/json").code(StatusCode.OK)

    return [teams]
})

server.get('/drivers', async (request, response) => {
    response.type("application/json").code(StatusCode.OK)

    return [drivers]

})

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    const retrievedDriver = drivers.find(driver => driver.id === id)

    if(!retrievedDriver){
        response.type("application/json").code(StatusCode.NOT_FOUND)
        return {message: "Driver not found"}
    } else{
        response.type("application/json").code(StatusCode.OK)
        return retrievedDriver
    }
})


//server.listen({port: process.env.PORT}, () =>{
server.listen({ port: 3333 }, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})