var config = {
        container: "#prinster-family",
        animateOnInit: true,
        hideRootNode: false,
        
        nodeAlign: "BOTTOM",
        
        connectors: {
            type: 'step'
        },
        node: {
            collapsable: true,
            HTMLclass: 'nodeExample1'
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }

    },
    root = {},

    id0 = {
        parent: root,
        marriedto: "id1",
        text: {
            name: "Josef Prünster",
            birthday: "1818-01-18",
            deathday: "1889-02-10",
        },
    },
    id00 = {
        parent: root,
        text: {
            name: "Johann Prünster",
            birthday: "1825-10-23",
        },
    },

    id1 = {
        parent: root,
        marriedto: id0,
        HTMLclass: 'light-gray',
        text:{
            name: "Maria Grüner",
            birthday: "1823",
        },
    },
    id2 = {
        parent: id0,
        HTMLclass: 'blue',
        text:{
            name: "Maria Prünster",
            birthday: "1848-10-23",
        },
    },
    id3 = {
        parent: id0,
        HTMLclass: 'gray',
        text:{
            name: "Anna Prünster",
            birthday: "1851-07-04",
            deathday: "1860-03-24",
        },
    },
    id4 = {
        parent: id00,
        HTMLclass: 'light-gray',
        text:{
            name: "Johonn Prünster",
            birthday: "1852-12-27",
            deathday: "1904-02-28",
        },
        link: {
            href: "http://www.google.com"
        },
    },
    id5 = {
        parent: id4,
        HTMLclass: 'blue',
        text:{
            name: "Anne Noria",
            birthday: "1899-03-13",
            deathday: "1981-10-05",
        },
    },
    id6 = {
        parent: id4,
        HTMLclass: 'blue',
        text:{
            name: "Noria Filomena",
            birthday: "1900-06-03",
            deathday: "1944-03-14",
        },
    },
    id7 = {
        parent: id4,
        HTMLclass: 'blue',
        text:{
            name: "Filom Paulina",
            birthday: "1901-10-29",
            deathday: "1944-08-18",
        },
    },
    id8 = {
        parent: id4,
        HTMLclass: 'blue',
        text:{
            name: "Joseph Franz",
            birthday: "1902-06-28",
            deathday: "1903-08-25",
        },
    },

    chart_config = [
        config,
        root,
        id0,id1,id00,id2,id3,
        id4,id5,id6,
        id7,id8
    ];

