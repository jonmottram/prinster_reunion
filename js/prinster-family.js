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

    josef1818 = {
        parent: root,
        nameId: "josef1818",
        marriedto: "maria1823",
        text: {
            name: "Josef Prünster",
            birthday: "1818-01-18",
            deathday: "1889-02-10",
        },
    },
    johann1825 = {
        parent: root,
        text: {
            name: "Johann Prünster",
            birthday: "1825-10-23",
        },
    },
    maria1823 = {
        parent: root,
        nameId: "maria1823",
        marriedto: "josef1818",
        HTMLclass: 'light-gray',
        text:{
            name: "Maria Grüner",
            birthday: "1823",
        },
    },
    maria1848 = {
        parent: josef1818,
        HTMLclass: 'blue',
        text:{
            name: "Maria Prünster",
            birthday: "1848-10-23",
        },
    },
    anna1851 = {
        parent: josef1818,
        HTMLclass: 'gray',
        text:{
            name: "Anna Prünster",
            birthday: "1851-07-04",
            deathday: "1860-03-24",
        },
    },
    johonn1852 = {
        parent: josef1818,
        HTMLclass: 'light-gray',
        text:{
            name: "Johonn Prünster",
            birthday: "1852-12-27",
            deathday: "1904-02-28",
        },
    },
    anne1899 = {
        parent: johonn1852,
        HTMLclass: 'blue',
        text:{
            name: "Anne Noria",
            birthday: "1899-03-13",
            deathday: "1981-10-05",
        },
    },
    noria1900 = {
        parent: johonn1852,
        HTMLclass: 'blue',
        text:{
            name: "Noria Filomena",
            birthday: "1900-06-03",
            deathday: "1944-03-14",
        },
    },
    filom1901 = {
        parent: johonn1852,
        HTMLclass: 'blue',
        text:{
            name: "Filom Paulina",
            birthday: "1901-10-29",
            deathday: "1944-08-18",
        },
    },
    joseph1902 = {
        parent: johonn1852,
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
        josef1818,maria1823,johann1825,maria1848,anna1851,
        johonn1852,anne1899,noria1900,
        filom1901,joseph1902
    ];

