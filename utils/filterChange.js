export default (filter) => {
  if (filter !== null) {
    filter.map((field, index) => {
      if (field !== null) {
        if (field[1] !== '') {
          switch (field[0]) {
            case 'Id':
              filter[index] = `{"field":"State.Id","operator":"eq","value":${field[1]}}`;
              break;
            case 'Name':
              filter[index] = `{"field":"Name","operator":"contains","value":${field[1]}}`;
              break;
            case 'Solver':
              filter[index] = `{"field":"CurrentSolver","operator":"contains","value":${field[1]}}`;
              break;
            default:
              return null
          }
        } else filter[index] = null
      }
    })

    filter = `{"logic":"and","filters":[${filter}]}`
  }
  return filter;

}
