export declare module 'end-port-process' {
    /**
     * Asynchronously kills processes running on specified ports.
     * @param ports Ports to kill processes on.
     * @returns A Promise that resolves to an array of ports for which processes were successfully killed.
     */
    const portKill: (...ports: number[]) => Promise<number[]>;

    export = portKill;
}