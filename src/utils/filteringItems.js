export const filteringItems = ({ itemsList, params, inputToSearch }) =>
  itemsList.filter(item =>
    item[params].toLowerCase().includes(inputToSearch?.toLowerCase()))
