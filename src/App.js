import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div style={styles.container}>
			<div style={styles.card}>
				<h1 style={styles.title}>Welcome to SilverMed Dental Clinic!</h1>
				<p style={styles.message}>
					Our website is currently under construction, but we’re excited to
					serve you!
				</p>
				<p style={styles.message}>
					Please check back soon for more information about our services,
					appointments, and more.
				</p>
				FaiqGithub0909
				<div style={styles.contact}>
					<h2>Contact Us</h2>
					<p>
						📞 <strong>Phone:</strong> (010) 722-23-01
					</p>
					<p>
						📧 <strong>Email:</strong> heydoc.public@gmail.com
					</p>
					<p>
						📍 <strong>Address:</strong> 66 Inshaatchilar avenue, Baku
					</p>
				</div>
				<p style={styles.thankYou}>Thank you for your patience!</p>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		backgroundColor: "#f4f4f4",
		fontFamily: "Arial, sans-serif",
	},
	card: {
		textAlign: "center",
		padding: "20px",
		backgroundColor: "#fff",
		borderRadius: "8px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		maxWidth: "400px",
		width: "100%",
	},
	title: {
		color: "#4CAF50",
		fontSize: "32px",
		fontWeight: "bold",
	},
	message: {
		fontSize: "18px",
		marginTop: "10px",
		color: "#333",
	},
	contact: {
		marginTop: "20px",
		textAlign: "left",
	},
	thankYou: {
		marginTop: "30px",
		fontStyle: "italic",
		color: "#666",
	},
};

export default App;
