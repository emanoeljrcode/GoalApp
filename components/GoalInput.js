import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native'

export default function GoalInput(props) {
		const [enteredGoal, setEnteredGoal] = useState('')

		const goalInputHandler = (enteredText) => {
				setEnteredGoal(enteredText);
		};

		const addGoalHandler = () => {
				props.onAddGoal(enteredGoal);
				setEnteredGoal('');
		}

		return (
				<Modal visible={props.visible} animationType="slide">
						<View style={styles.inputContainer}>
								<TextInput 
										placeholder="Course Goal" 
										style={styles.input} 
										onChangeText={goalInputHandler}
										value={enteredGoal}
								/>
								<View style={styles.buttons}>
										<View style={styles.button}>
												<Button title="ADD" onPress={addGoalHandler} />
										</View>
										<View style={styles.button}>
												<Button title="CANCEL" color="red" onPress={props.onCancel} />
										</View>			
								</View>
						</View>
				</Modal>
		)
}

const styles = StyleSheet.create({ 
		inputContainer: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
		},
		input: {
				width: '80%', 
				borderColor: 'black', 
				borderWidth: 1, 
				padding: 10, 
				marginBottom: 10
		},
		buttons: {
				flexDirection: 'row',
				justifyContent: 'space-around',
				width: '60%'
		},
		button: {
				width: '40%'
		}
})

