export default kanbanAPI {
Static getItems(columnId){
    const column = read().find(column => column.id == columnId);

    if (!column) {
      return [];
    }

    return column.items;

  }0
}

function read() {
  const json = localStorage.getItem("kanban-data");

  if (!json) {
    return [
      {
        id: 1,
        items: []
      },
      {
        id: 2,
        items: []
      },
      {
        id: 3,
        items: []
      },
    ];
  }

  return JSON.parse(json);
}

function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));

}