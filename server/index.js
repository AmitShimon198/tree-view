const data = [
    {
        id: '1',
        label: 'first',
        hasChildren: true,
        children: [

        ]
    },
    {
        label: 'second',
        id: '2',
        hasChildren: true,
        children: [
            {
                id: '2-1',
                label: 'inner-second-1',
                hasChildren: true,
                children: []
            },
            {
                id: '2-2',
                label: 'inner-second-2',
            },
            {
                id: '2-3',
                label: 'inner-second-3',
            }
        ]
    },
]



const children = {
    '1': [{
        id: '1-1',
        label: 'inner-first-1',
    },
    {
        id: '1-2',
        label: 'inner-first-2',
    },
    {
        id: '1-3',
        label: 'inner-first-3',
    }],
    '2': [{
        id: '2-1',
        label: 'inner-second-1',
        hasChildren: true,
        children: []
    },
    {
        id: '2-2',
        label: 'inner-second-2',
    },
    {
        id: '2-3',
        label: 'inner-second-3',
    }],
    '2-1': [{
        id: '2-1-1',
        label: 'inner-second-second-1',
    },
    {
        id: '2-1-2',
        label: 'inner-second-second-2',
    },
    {
        id: '2-1-3',
        label: 'inner-second-second-3',
    }]
}











const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 4000
app.get('/', (req, res) => {
    res.json(data)
})
app.get('/getChildren/:id', (req, res) => {
    const id = req.params.id;
    res.json(children[id])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})