const opts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de tarea por hacer'
    }
}
const opts2 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts2)
    .command('eliminar', 'Elimina la tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}