const initState = {
    projects: [
        {id: '1', title: 'help me find pech', content: 'blah blah blah blah 1'},
        {id: '2', title: 'collect all the starts', content: 'blah blah blah blah 2'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah blah 3'}
    ]
}

const projectReducer = (state = initState, action) =>{
    return state;
}

export default projectReducer;