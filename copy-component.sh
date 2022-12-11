#!/bin/bash

# Set the component name as the first argument passed to the script
COMPONENT_NAME=$1
COMPONENT_FILE="src/lib-components/$COMPONENT_NAME"
COMPONENT_NAME_LOWERCASE=$(echo $COMPONENT_NAME | awk '{print tolower(substr($0,1,1)) substr($0,2)}')

# Copy the ".CopyMeComponent" directory to the component name
cp -r src/lib-components/.CopyMeComponent $COMPONENT_FILE

# Rename the ".CopyMeComponent/src/CopyMeComponent.vue" file to "<component-name>.vue"
mv "$COMPONENT_FILE/src/CopyMeComponent.vue" "$COMPONENT_FILE/src/$COMPONENT_NAME.vue"

# Recursively search and replace all instances of "CopyMeComponent" with the component name
find $COMPONENT_FILE -type f -exec sed -i "s/CopyMeComponent/$COMPONENT_NAME/g" {} \;
find $COMPONENT_FILE -type f -exec sed -i "s/copyMeComponent/$COMPONENT_NAME_LOWERCASE/g" {} \;

# Copy the "/stories/.CopyMeStory.stories.js" file to "/stories/<component-name>.stories.js"
cp "stories/.CopyMeStory.stories.js" "stories/$COMPONENT_NAME.stories.js"
find "stories/$COMPONENT_NAME.stories.js" -type f -exec sed -i "s/CopyMeComponent/$COMPONENT_NAME/g" {} \;
