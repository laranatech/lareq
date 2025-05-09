import { describe, test, expect } from 'vitest'
import { RenderQueue } from '../src/queue'

describe('Compression', () => {
	describe('setCtx', () => {
		test('removing empty setCtx', () => {
			const q = new RenderQueue()
	
			q.commands = [
				{ 'c': 25,'o': {} },
				{ 'c': 2 },
				{ 'c': 12, 'o': { 'type': 'point', 'x': 40, 'y': 10 } },
				{ 'c': 11, 'o': { 'type': 'point', 'x': 50, 'y': 20 } },
				{ 'c': 11, 'o': { 'type': 'point', 'x': 30, 'y': 20 } },
				{ 'c': 6 },
				{ 'c': 9 },
				{ 'c': 25,'o': {} },
			]

			const expected = [
				{ 'c': 2 },
				{ 'c': 12, 'o': { 'type': 'point', 'x': 40, 'y': 10 } },
				{ 'c': 11, 'o': { 'type': 'point', 'x': 50, 'y': 20 } },
				{ 'c': 11, 'o': { 'type': 'point', 'x': 30, 'y': 20 } },
				{ 'c': 6 },
				{ 'c': 9 },
			]
	
			expect(q.toCompressed()).toMatchObject(expected)
		})

		test('striping same fields', () => {
			const q = new RenderQueue()
	
			q.commands = [
				{ 'c': 25,'o': { 'fillStyle': '#3caa3c' } },
				{ 'c': 25,'o': { 'fillStyle': '#3caa3c' } },
				{ 'c': 25, 'o': { 'fillStyle': '#3caa3c', 'strokeStyle': '#ccc' } },
				{ 'c': 25, 'o': { 'fillStyle': '#222', 'strokeStyle': '#111' } },
				{ 'c': 25, 'o': { 'strokeStyle': '#111' } },
				{ 'c': 25, 'o': { 'fillStyle': '#222', 'strokeStyle': '#222' } },
			]
	
			const expected = [
				{ 'c': 25,'o': { 'fillStyle': '#3caa3c' } },
				{ 'c': 25, 'o': { 'strokeStyle': '#ccc' } },
				{ 'c': 25, 'o': { 'fillStyle': '#222', 'strokeStyle': '#111' } },
				{ 'c': 25, 'o': { 'strokeStyle': '#222' } },
			]
	
			expect(q.toCompressed()).toMatchObject(expected)
		})
	})
})

