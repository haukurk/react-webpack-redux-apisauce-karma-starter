import Reactotron from 'reactotron'

// connect with defaults
Reactotron.connect()

// Connect with options

const options = {
  name: 'React Web', // Display name of the client
  server: 'localhost', // IP of the server to connect to
  port: 3334, // Port of the server to connect to (default: 3334)
  enabled: true // Whether or not Reactotron should be enabled.
}

Reactotron.connect(options);
