export interface Thread {
    Id: number;
    ActualRiskId: number
    ActualRiskName: string
    DateCreated: string
    Description: string
    ExternalSourceId: string
    Notes: null
    ProjectId: number
    ProjectName: null
    SecurityRequirements: Security
    SourceId: number
    SourceName: string
    SourceType: null
    StatusName: string
    TestCases: []
    ThreatId: number
    ThreatName: string
    listNotes: []
    type: number
  }
  
  export interface Security {
    Description: string
    Guid: null
    Id: number
    IsCompensatingControl: boolean
    Labels: null
    LibraryId: number
    Name: string
    RiskId: number
    RiskName: string
    SourceName: null
    StatusName: null
  }