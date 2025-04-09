

export const sendUserdata = async (data: { name: string; phone: string; description: string }) => {
  try {
    await fetch("/api/send-userdata", {
      method: "POST",
      body: JSON.stringify(data),
    })
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false }
  }
}


