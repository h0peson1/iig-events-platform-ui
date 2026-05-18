import React from 'react'


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



export default {} as Record<string, React.ComponentType>