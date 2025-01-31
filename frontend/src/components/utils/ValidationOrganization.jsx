export const ValidationOrganization = (orgData) => {
   
    const trimmedName = orgData.name.trim();
    const trimmedWebsite = orgData.website.trim();
    const trimmedDescription = orgData.description.trim();
  
    if (!trimmedName || !trimmedWebsite || !trimmedDescription) {
      return "All fields are required";
    }
  
    
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(trimmedWebsite)) {
      return "Invalid website URL";
    }
  
    return ""; // No errors
  };