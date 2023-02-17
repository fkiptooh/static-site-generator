const fs = require('fs')
const glob =    require('glob')
const matter =  require('gray-matter')
const {marked}= require('marked')
const mkdirp =  require('mkdirp')
const path =    require('path')

const readFile = (filename) => {
	const rawFile = fs.readFileSync(filename, 'utf8')
	const parsed = matter(rawFile)
	const html = marked(parsed.content)

	return { ...parsed, html }
}

const templatize = (template, { date, title, author, content, mission }) =>
	template
		.replace(/<!-- PUBLISH_DATE -->/g, date)
		.replace(/<!-- TITLE -->/g, title)
		.replace(/<!-- AUTHOR -->/g, author)
		.replace(/<!-- MISSION -->/g, mission)
		.replace(/<!-- CONTENT -->/g, content)
		
		

const saveFile = (filename, contents) => {
	const dir = path.dirname(filename)
	mkdirp.sync(dir)
	fs.writeFileSync(filename, contents)
}

const getOutputFilename = (filename, outPath) => {
	const basename = path.basename(filename)
	const newfilename = basename.substring(0, basename.length - 3) + '.html'
	const outfile = path.join(outPath, newfilename)
	return outfile
}

const processFile = (filename, template, outPath) => {
	const file = readFile(filename)
	const outfilename = getOutputFilename(filename, outPath)

	const templatized = templatize(template, {
		date: file.data.date,
		title: file.data.title,
		author: file.data.author,
		content: file.html,
		mission: file.data.mission,
	})

	saveFile(outfilename, templatized)
	console.log(` ${outfilename}`)
}

const main = () => {
	const srcPath = path.resolve('src')
	const outPath = path.resolve('dist')
	const template = fs.readFileSync(path.join(srcPath, 'index.html'), 'utf8')
	const filenames = glob.sync(srcPath + '/pages/**/*.md')

	filenames.forEach((filename) => {
		processFile(filename, template, outPath)
	})
}

main()