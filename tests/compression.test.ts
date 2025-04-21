import { describe, test, expect } from 'vitest'
import { RenderQueue } from '../src/queue'

describe('Compression', () => {
	test('striping same fields', () => {
		const q = new RenderQueue()

		q.commands = [
			{ 'c': 25,'o': { 'fillStyle': '#3caa3c' } },
			{ 'c': 2 },
			{ 'c': 12, 'o': { 'type': 'point', 'x': 40, 'y': 10 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 50, 'y': 20 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 30, 'y': 20 } },
			{ 'c': 6 },
			{ 'c': 9 },
			{ 'c': 25,'o': { 'fillStyle': '#3caa3c' } },
			{ 'c': 2 },
			{ 'c': 12, 'o': { 'type': 'point', 'x': 50, 'y': 20 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 60, 'y': 30 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 40, 'y': 30 } },
			{ 'c': 6 },
			{ 'c': 9 },
			{ 'c': 25, 'o': { 'fillStyle': '#3caa3c', 'strokeStyle': '#ccc' } },
			{ 'c': 2 },
			{ 'c': 12, 'o': { 'type': 'point', 'x': 30, 'y': 20 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 40, 'y': 30 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 20, 'y': 30 } },
			{ 'c': 6 },
			{ 'c': 9 },
		]

		const expected = [
			{ 'c': 25,'o': { 'fillStyle': '#3caa3c' } },
			{ 'c': 2 },
			{ 'c': 12, 'o': { 'type': 'point', 'x': 40, 'y': 10 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 50, 'y': 20 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 30, 'y': 20 } },
			{ 'c': 6 },
			{ 'c': 9 },
			{ 'c': 2 },
			{ 'c': 12, 'o': { 'type': 'point', 'x': 50, 'y': 20 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 60, 'y': 30 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 40, 'y': 30 } },
			{ 'c': 6 },
			{ 'c': 9 },
			{ 'c': 25, 'o': { 'strokeStyle': '#ccc' } },
			{ 'c': 2 },
			{ 'c': 12, 'o': { 'type': 'point', 'x': 30, 'y': 20 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 40, 'y': 30 } },
			{ 'c': 11, 'o': { 'type': 'point', 'x': 20, 'y': 30 } },
			{ 'c': 6 },
			{ 'c': 9 },
		]

		expect(q.toCompressed()).toMatchObject(expected)
	})

	test('removing empty setCtx', () => {
		const q = new RenderQueue()

		q.commands = [
			{ 'c': 25,'o': {} },
		]

		expect(q.toCompressed()).toMatchObject([])
	})
})

