import { LogMode } from './enum'

/**
 * Runtime variables and settings that manage editor creation and behavior.
 * - Includes per-instance configurations and global values.
 * - Properties with `[index]` support allow individual editor customization.
 *
 * @example
 * if (isMobileDevice) {
 *   vn.variables.attFileMaxSizes[0] = 50 * 1024 * 1024; // Increase max upload size on mobile
 * }
 */
export interface Variable {
	isCreated: boolean;
	/**
	 * - A mode to view Logs, used for development. When Logs are printed, the event and target information are displayed.
	 */
	logMode: LogMode.DEBUG | LogMode.ERROR | LogMode.INFO;
	observerOptions: {
		characterData: boolean,
		childList: boolean,
		subtree: boolean
	};
	/**
	 * - A value controlling the textarea scroll movement and height adjustment in the editor. This takes precedence over .activeModeByDevice for controlling scroll movement and height adjustment.
	 * - `true` : Default value. Scroll changes when the note is focused or blurred.
	 * - `false` : Scroll does not change when the note is focused or blurred.
	 */
	useMobileActiveMode: boolean;
	lastScreenHeight: number | null;
	mobileKeyboardExceptHeight: number | null;
	isSelectionProgress: boolean;
	preventChangeScroll: number;
	/**
	 * - Interval time for each event. There’s no need to change, but might be necessary in special situations like drawing more than 20 editors on one screen.
	 * - Interval of the window resize event. Default value is 50.
	 */
	resizeInterval: number;
	/**
	 * - Interval time for each event. There’s no need to change, but might be necessary in special situations like drawing more than 20 editors on one screen.
	 * - Interval of the textarea input event. Default value is 50.
	 */
	inputInterval: number;
	/**
	 * - Interval time for each event. There’s no need to change, but might be necessary in special situations like drawing more than 20 editors on one screen.
	 * - Interval given when loading the editor. Default value is 100. For arranging visual elements like converting text to icons and adjusting editor size before displaying.
	 */
	loadInterval: number;
	canEvents: boolean;
    /**
     * Position of the toolbox. Above or below.
     */
	toolPositions: string;
    /**
     * The number of initial rows in the toolbox
     */
	toolDefaultLines: number;
	/**
	 * - Variables for dynamically setting the size of the textarea
	 * - Default width of the textarea. If not set, the value of textarea-width is inserted. Used for dynamically changing the width.
	 */
	textareaOriginWidths: string;
	/**
	 * - Variables for dynamically setting the size of the textarea
	 * - Default height of the textarea. If not set, the value of textarea-height is inserted. Used for dynamically changing the height. Only insert css style in px units.(ex. 400px)
	 */
	textareaOriginHeights: string;
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - `true` : Uses a placeholder.
	 * - `false` : Default value. Does not use a placeholder.
	 */
	placeholderIsVisible: boolean;
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - Adjusts the vertical position of the placeholder. Negative values are possible. The unit is px. Default value is 0.
	 */
	placeholderAddTop: number;
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - Adjusts the horizontal position of the placeholder. Negative values are possible. The unit is px. Default value is 0.
	 */
	placeholderAddLeft: number;
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - Sets the width of the placeholder. The default value is the size of the flexible textarea.
	 */
	placeholderWidth: string;
	isIOS: boolean;
	editSelections: (Selection | null);
	editRanges: (Range | null);
	startOffsets: (number | null);
	endOffsets: (number | null);
	editStartNodes: (Node | null);
	editEndNodes: (Node | null);
	editStartElements: (Element | Node | null);
	editEndElements: (Element | Node | null);
	editStartUnitElements: (Element | Node | null);
	editEndUnitElements: (Element | Node | null);
	editDragUnitElements: (Element | Node | null)[];
	setEditStyleTagToggle: number;
	/**
	 * - Variables controlling file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attFiles[idx] contains all files attached by the user.
	 * - File types to block for file attachment. Written in MIME type (ex image/png). Default is [].
	 */
	attFilePreventTypes: string[];
	/**
	 * - Variables controlling file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attFiles[idx] contains all files attached by the user.
	 * - File types to allow for file attachment. Written in MIME type (ex image/png). Default is []. If present, only those files can be attached.
	 */
	attFileAcceptTypes: string[];
	/**
	 * - Variables controlling file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attFiles[idx] contains all files attached by the user.
	 * - Maximum size allowed for file attachment. Default is 20MB.
	 * 
	 * ```typescript
	 * vn.variables.attFileMaxSizes[0] = 50 * 1024 * 1024;
	 * ```
	 */
	attFileMaxSizes: number;
	/**
	 * - Variables controlling image file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attImages[idx] contains all image files attached by the user.
	 * - File types to block for image attachment. Written in MIME type (ex image/png). Default is [].
	 */
	attImagePreventTypes: string[];
	/**
	 * - Variables controlling image file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attImages[idx] contains all image files attached by the user.
	 * - File types to allow for image attachment. Written in MIME type (ex image/png). Default is []. If present, only those files can be attached.
	 */
	attImageAcceptTypes: string[];
	/**
	 * - Variables controlling image file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attImages[idx] contains all image files attached by the user.
	 * - Maximum size allowed for image attachment. Default is 20MB.
	 * 
	 * ```typescript
	 * vn.variables.attImageMaxSizes[0] = 50 * 1024 * 1024;
	 * ```
	 */
	attImageMaxSizes: number;
	/**
	 * - The value set by the size-level attribute. (sizeLevel + 11) / 20. Defining .sizeRates[idx] itself is also possible (takes precedence).
	 * User-defined in vanillanote_onBeforeCreate(). This value allows making the editor smaller or larger than controlling via attributes.
	 */
	sizeRates: number;
	defaultStyles: {
        "font-size": string
        "line-height": string
        "font-family": string
    };
	/**
	 * - Sets the language of the editor. Used in conjunction with .languageSet. An error occurs if a key not in .languageSet is entered.
	 * - `'ENG'` : Default value. Sets the language of the note to English.
	 * - `'KOR'` : Sets the language of the note to Korean.
	 * - `'...'` : Can be used after being defined in .languageSet.
	 */
	languages: string;
}
