export type Collection<I extends { id: string }> = Array<[I['id'], I]>;
