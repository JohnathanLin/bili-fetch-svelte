import { derived, writable } from 'svelte/store';
import type { Status } from '../../../types/StatusType';

export const status = writable<Status>({
	statusMessage: '加载中...',
	progress: 0
});

export const statusMessage = derived(status, ($status) => $status.statusMessage);
export const progress = derived(status, ($status) => $status.progress);

export const infoMessage = writable<string>('请稍等片刻');
