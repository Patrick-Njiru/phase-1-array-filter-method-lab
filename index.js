// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, driverName) => drivers.filter( name => name.toUpperCase() === driverName.toUpperCase())

const fuzzyMatch = (drivers, driverName) => drivers.filter( name => name.slice(0,2) === driverName.slice(0,2))

drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
]

const matchName = (drivers, driverName) => drivers.filter (driverDetails => {
    if (driverDetails.name === driverName) {
        return driverDetails
    }
})