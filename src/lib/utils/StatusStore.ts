import { derived, writable } from 'svelte/store';
import type { Status } from '$lib/types/StatusType';
import type { StructuredMessage } from '$lib/types/StructuredMessage';

export const status = writable<Status>({
	statusMessage: '加载中...',
	progress: 0
});

export const statusMessage = derived(status, ($status) => $status.statusMessage);
export const progress = derived(status, ($status) => $status.progress);

export const infoMessage = writable<StructuredMessage>({
	markdown: '请稍等片刻',
	time: 1000
});