import { createI18n } from 'vue-i18n';

export function setupi18n() {
  const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
      en: {
        cardLottery: {
          setBanner: 'Set As Banner',
          setIcon: 'Set As Icon',
          openAnother: 'Open Another',
        },
        cards: {
          roundDrawn: 'Round Drawn',
          roundPlayed: 'Round Played',
          card: 'Card',
          matches: 'Matches',
          winrate: 'Winrate',
          inclusion: 'Inclusion',
          avgCopies: 'Avg. Copies',
          mulliganWinrate: 'Mull. Winrate',
          keptInMulligan: 'Kept In Mull.',
          drawnWinrate: 'Drawn Winrate',
          turnPlayed: 'Turn Played',
          turnsHeld: 'Turns Held',
          recommendedDecks: 'Recommended Decks',
          similarCards: 'Similar Cards',
          attack: 'Attack',
          health: 'Health',
          cost: 'Cost',
          quantityOwned: 'Quantity Owned',
        },
        deck: {
          copyDeckCode: 'Copy Deck Code',
          deckCodeCopied: 'Deck Code Copied',
          deleteDeck: 'Delete Deck',
          deleteDeckConfirmation:
            'Are you sure you would like to delete this deck?',
          editDeckName: 'Edit Deck Name',
          signInToUpload: 'Please sign in to upload deck to LoR',
          uploadDeckToLor: 'Upload Deck to Legends of Runeterra',
          deckUploaded: 'Deck Uploaded!',
          updatePrivacy: 'Update Deck Privacy',
          deckPrivate: 'Currently Private',
          deckPublic: 'Currently Public',
          openInDeckBuilder: 'Open in Deck Builder',
          numManaCards: '{num} Mana Cards',
          simulateMulligan: 'Simulate Mulligan',
          replaceAllCards: 'Replace All Cards',
          replaceSelectedCards: 'Replace Selected Cards',
        },
        general: {
          // runeterra: 'Runeterra',
          manaCost: 'Mana Cost',
          regions: 'Regions',
          clear: 'Clear',
          copy: 'Copy',
          patch: 'Patch',
          matches: 'Matches',
          wins: 'Wins',
          winrate: 'Winrate',
          quantity: 'Quantity',
          round: 'Round',
          total: 'Total',
          champion: 'Champion',
          follower: 'Follower',
          spell: 'Spell',
          landmark: 'Landmark',
          equipment: 'Equipment',
          champions: 'Champions',
          followers: 'Followers',
          spells: 'Spells',
          landmarks: 'Landmarks',
          equipments: 'Equipment',
          statistics: 'Statistics',
          advanced: 'Advanced',
          newAdvancedFilter: 'New Advanced Filter',
          types: 'Types',
          rarities: 'Rarities',
          sets: 'Sets',
          keywords: 'Keywords',
          pastDays: 'Past {count} Days',
          pastHours: 'Past {count} Hours',
          pastHour: 'Past Hour',
          season: 'Season',
          servers: 'Servers',
          sampleSize: 'Sample Size',
          minimumMatches: 'Minimum Matches',
        },
      },
    }, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  });

  return i18n;
}
