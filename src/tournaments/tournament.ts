export interface TournamentSuggestion {
  /**
   * The common identifier for a pool
   */
  key: string;

  /**
   * The suggested pools
   */
  pools: TournamentPoolSuggestion[];
}

export interface TournamentPoolSuggestion {
  /**
   * The amount of slots available in this pool. Slots are filled by a team or a player.
   */
  slots: number;

  /**
   * The amount of tables exclusively available for this pool. 
   */
  tablesExcl: number;

  /**
   * The amount of tables that this pool needs to share.
   */
  tablesShared: number;

  /**
   * Expected duration of this pool
   */
  duration: number;
}