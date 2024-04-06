// Ajuste de servidor y puertos
import express from 'express'
import {app} from './app.js'
app.set('port', process.env.PORT || 1550)
console.log(`Sever listened in port http://localhost:${app.get('port')}`)
app.listen(app.get('port'))

