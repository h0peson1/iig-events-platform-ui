import React from 'react'
import IIGAbout from './IIGAbout'
import IigEvents from './IigEvents'
import IIGServices from './IIGServices'
import IIGHome from './IIGHome'
import IIGTrackRecord from './IIGTrackRecord'
import IIGCareers from './IIGCareers'

const seen = new WeakSet<object>()

function setDisplayName(component: unknown, name: string) {
	if ((typeof component !== 'function' && typeof component !== 'object') || component === null) return
	if (seen.has(component)) return
	seen.add(component)
	const target = component as { displayName?: string; type?: unknown; render?: unknown }
	target.displayName ??= name
	setDisplayName(target.type, name)
	setDisplayName(target.render, name)
}

setDisplayName(IIGAbout, 'IIGAbout')
setDisplayName(IigEvents, 'IigEvents')
setDisplayName(IIGServices, 'IIGServices')
setDisplayName(IIGHome, 'IIGHome')
setDisplayName(IIGTrackRecord, 'IIGTrackRecord')
setDisplayName(IIGCareers, 'IIGCareers')

export default { IIGHome, IIGAbout, IigEvents, IIGServices, IIGTrackRecord, IIGCareers }