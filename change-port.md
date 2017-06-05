`sed -i -e 's/8081/8088/g' ./node_modules/react-native/local-cli/server/server.js`




In a Terminal tab, from the project root, I run :

`react-native start --port=8082`
This kicks Node up on port 8082. Then, I launch the app using :

`react-native run-android`
Once the app is launched, I update the development server's url and port to match the settings above
