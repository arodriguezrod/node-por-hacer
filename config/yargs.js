
const descripcion = {
	demand: true,
	alias: 'd'
};

const completado = {
	alias: 'c',
	default: true
}

const argv = require('yargs')
			.command('crear','Crea una tarea',{descripcion})
			.command('actualizar','Actualiza el estado completado de una tarea',{descripcion,completado})
			.command('borrar','Borrar una tarea de la lista',{descripcion})
			.help()
			.argv;


module.exports = {
	argv
}	