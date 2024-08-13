/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

export declare class TicTacToe {
    /* X PlayerName */
    playerX: string;
    /* Y PlayerName */
    playerY: string;
    /* X if true, Y if false */
    _currentTurn: boolean;
    _x: number;
    _y: number;
    _turns: number;
    constructor(playerX: string, playerY: string);
    get board(): number;
    turn(player, index: number): boolean;
    turn(player, x: number, y: number): boolean;
}
