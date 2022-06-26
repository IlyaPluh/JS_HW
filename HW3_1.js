//task3.1

    // const enterprises = [
    //   {
    //     id: 1,
    //     name: "Предприятие 1",
    //     departments: [
    //       {
    //         id: 2,
    //         name: "Отдел тестирования",
    //         employees_count: 10,
    //       },
    //       {
    //         id: 3,
    //         name: "Отдел маркетинга",
    //         employees_count: 20,
    //       },
    //       {
    //         id: 4,
    //         name: "Администрация",
    //         employees_count: 15,
    //       },
    //     ]
    //   },
    //   {
    //     id: 5,
    //     name: "Предприятие 2",
    //     departments: [
    //       {
    //         id: 6,
    //         name: "Отдел разработки",
    //         employees_count: 50,
    //       },
    //       {
    //         id: 7,
    //         name: "Отдел маркетинга",
    //         employees_count: 20,
    //       },
    //       {
    //         id: 8,
    //         name: "Отдел охраны труда",
    //         employees_count: 5,
    //       },
    //     ]
    //   },
    //   {
    //     id: 9,
    //     name: "Предприятие 3",
    //     departments: [
    //       {
    //         id: 10,
    //         name: "Отдел аналитики",
    //         employees_count: 0,
    //       },
    //     ]
    //   }
    // ]

    const task3_1 = () => {
      const fs = require('fs');
      const rawdata = fs.readFileSync('task3.json');
      const enterprises = JSON.parse(rawdata);
    //enterprises.forEach(el => console.log(el.departments.reduce((count, person) => count + person.employees_count, 0)))
    //const newenterprises = enterprises.map(el => el.departments.reduce((a, b) => a + b.employees_count, 0))
    //console.log(newenterprises);

    let allemployees = 0;
    enterprises.filter(el => console.log(`${el.name} (${el.departments.reduce((count, person) => allemployees = count + person.employees_count, 0) === 0 ? 'нет' : allemployees} сотрудников)${el.departments.map(el => `\n- ${el.name} (${el.employees_count === 0 ? 'нет' : el.employees_count} сотрудников)`)}`));
  }
  task3_1();
  