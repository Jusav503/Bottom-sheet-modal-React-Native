# React Native Bottom Sheet

Using <a href="https://gorhom.github.io/react-native-bottom-sheet/">@gorhom/react-native-bottom-sheet</a> library

Requirements:
<ul>
  <li>TypeScript</li>
  <li>*Install dependency* react-native-gesture-handler</li>
  <li>*Install dependency* @gorhom/bottom-sheet</li>
</ul>

|     Text example     |    Bottom sheet modal  |        Demo              |
|:--------------------:|:----------------------:|:------------------------:|
|<img src="https://github-images-jusav.s3.eu-central-1.amazonaws.com/bottomsheetmodal.jpg" width="200" />| <img src="https://github-images-jusav.s3.eu-central-1.amazonaws.com/bottomsheetmodal2.jpg" width="200"/>|<img src="https://github-images-jusav.s3.eu-central-1.amazonaws.com/bottomsheetmodal3.gif" width="200"/>|

STEPS:

- Hooks and callbacks

```js
const InfoBottomModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  }, []);

  return ( 
```
  
- Structure
```js
 return (
    <GestureHandlerRootView>
        <View style={{ backgroundColor: isOpen ? "#00000090" : "white" }}>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <Text>ejemplo</Text>
          </TouchableOpacity>
        
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onDismiss={() => setIsOpen(false)}
            >
              <View style={styles.contentContainer}>
                <Text>ejemplo</Text>
              </View>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </View>
    </GestureHandlerRootView>
  );
};
```
