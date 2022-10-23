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
        },
        general: {
          // runeterra: 'Runeterra',
          manaCost: 'Mana Cost',
          regions: 'Regions',
          clear: 'Clear',
          patch: 'Patch',
          matches: 'Matches',
          total: 'Total',
        },
      },
    }, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  });

  return i18n;
}
