import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'mydatabase.db' });

const Test11111 = () => {


  const [luong, setluong] = useState();





  // const addAllJars = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       `UPDATE financial_jars SET amount = amount+(?*percent/100)
  //     `, [luong]
  //     );
  //     tx.executeSql(
  //       `UPDATE financial_jars SET amountOld = amountOld+(?*percent/100)
  //     `, [luong]
  //     );

  //   })
  //   fetchJars();
  // };

  // const reset = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       `UPDATE financial_jars SET amount = 0, amountOld = 0
  //     `
  //     );

  //   })
  //   fetchJars();
  // };

  // const addUser = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'INSERT INTO users (name, age) VALUES (?, ?)',
  //       ['John Doe', 25],
  //       () => {
  //         console.log('User added successfully');
  //         fetchUsers();
  //       }
  //     );
  //   });
  // };

  // const deleteUser = (id) => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'DELETE FROM users WHERE id = ?',
  //       [id],
  //       () => {
  //         console.log('User deleted successfully');
  //         fetchUsers();
  //       }
  //     );
  //   });
  // };

  // const updateUser = (id) => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'UPDATE users SET age = ? WHERE id = ?',
  //       [30, id],
  //       () => {
  //         console.log('User updated successfully');
  //         fetchUsers();
  //       }
  //     );
  //   });
  // };

};

// const setup = () => {
//   return db.transaction((tx) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS financial_jars (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT,
//       amount REAL,
//       amountOld REAL,
//       percent REAL
//     ) `
//     );

//     tx.executeSql(
//       'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
//       ['essentials', 0, 0, 55],
//       () => {
//         console.log('Jar1 added successfully');
//         fetchJars();
//       }
//     );

//     tx.executeSql(
//       'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
//       ['education', 0, 0, 10],
//       () => {
//         console.log('Jar2 added successfully');
//         fetchJars();
//       }
//     );

//     tx.executeSql(
//       'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
//       ['savings', 0, 0, 10],
//       () => {
//         console.log('Jar3 added successfully');
//         fetchJars();
//       }
//     );

//     tx.executeSql(
//       'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
//       ['enjoyment', 0, 0, 10],
//       () => {
//         console.log('Jar4 added successfully');
//         fetchJars();
//       }
//     );

//     tx.executeSql(
//       'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
//       ['investment', 0, 0, 10],
//       () => {
//         console.log('Jar5 added successfully');
//         fetchJars();
//       }
//     );

//     tx.executeSql(
//       'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
//       ['charity', 0, 0, 5],
//       () => {
//         console.log('Jar6 added successfully');
//         fetchJars();
//       }
//     );
//   });

// };


// const fetchJars = () => {
//   const jarsArray = [];
//   db.transaction((tx) => {
//     tx.executeSql('SELECT * FROM financial_jars', [], (_, resultSet) => {
//       const rows = resultSet.rows;

//       for (let i = 0; i < rows.length; i++) {
//         const jar = rows.item(i);
//         jarsArray.push(jar);
//       }
//     });

//     return jarsArray;
//   });

// };

const test = () => {
  return console.log("aaaa");
}



const JARMODULE = {
  createTable: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS financial_jars (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            amount REAL,
            amountOld REAL,
            percent REAL
          ) `,
          [],
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  },

  createTable2: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS revenue (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            amount REAL
          ) `,
          [],
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  },

  createRows2: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        
        tx.executeSql(
          'INSERT INTO revenue (amount) SELECT ? FROM (SELECT COUNT(*) as count FROM revenue) WHERE count < 2',
          [0],
          () => {
            console.log('Revenue Added');
          }
        );

        tx.executeSql(
          'INSERT INTO revenue (amount) SELECT ? FROM (SELECT COUNT(*) as count FROM revenue) WHERE count < 2',
          [0],
          () => {
            console.log('Expense Added');
          }
        );
      });
    });
  },

  createRows: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        
        tx.executeSql(
          'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
          ['essentials', 0, 0, 55],
          () => {
            console.log('Jar1 added successfully');
          }
        );

        tx.executeSql(
          'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
          ['education', 0, 0, 10],
          () => {
            console.log('Jar2 added successfully');
          }
        );

        tx.executeSql(
          'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
          ['savings', 0, 0, 10],
          () => {
            console.log('Jar3 added successfully');
          }
        );

        tx.executeSql(
          'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
          ['enjoyment', 0, 0, 10],
          () => {
            console.log('Jar4 added successfully');
          }
        );

        tx.executeSql(
          'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
          ['investment', 0, 0, 10],
          () => {
            console.log('Jar5 added successfully');
          }
        );

        tx.executeSql(
          'INSERT INTO financial_jars (name, amount, amountOld, percent) SELECT ?, ?, ?, ? FROM (SELECT COUNT(*) as count FROM financial_jars) WHERE count < 6',
          ['charity', 0, 0, 5],
          () => {
            console.log('Jar6 added successfully');
          }
        );

      });
    });
  },

  getJars: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM financial_jars', [], (tx, results) => {
          const rows = results.rows.raw();
          resolve(rows);
        }, (error) => {
          reject(error);
        });
      });
    });
  },

  getRevenue: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM revenue', [], (tx, results) => {
          const rows = results.rows.raw();
          resolve(rows);
        }, (error) => {
          reject(error);
        });
      });
    });
  },

  addAll: (tien) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `UPDATE financial_jars SET amount = amount+(?*percent/100), amountOld = amountOld+(?*percent/100)
        `, [tien, tien], (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve();
          }
        }, (error) => {
          reject(error);
        });
      });
    });
  },

  updateRevenue: (amount, id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('UPDATE revenue SET amount = ? WHERE id = ?', [amount, id], (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve();
          }
        }, (error) => {
          reject(error);
        });
      });
    });
  },

  updateJarwithId: (amount,id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('UPDATE financial_jars SET amount = amount-? WHERE id = ?', [amount,id], (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve();
          }
        }, (error) => {
          reject(error);
        });
      });
    });
  },
}


export default JARMODULE;